class Api::PuppiesController < ApplicationController

  def index
    @puppies = Puppy.all

    if params[:user]
      @puppies = Puppy.where(owner_id: params[:user].to_i)
    end

    if bound_params
      @puppies = @puppies.in_bounds(bound_params)
    end

    if price_params
      if (Integer(price_params[:maxPrice]) >= 100)
        @puppies = @puppies.where("price > ?", Integer(price_params[:minPrice]))
      else
        @puppies = @puppies.where("price > ? AND price < ?", Integer(price_params[:minPrice]), Integer(price_params[:maxPrice]))
      end
    end

    if breed_params != '' && breed_params != 'all' && !breed_params.nil?
      if (breed_params == 'other')
        @puppies = @puppies.where(
          "breed NOT IN ('german shepherd', 'corgi', 'golden retriever', 'labrador', 'beagle')"
          )
      else
        @puppies = @puppies.where("breed LIKE ?", breed_params.downcase)
      end
    end

    render json: @puppies
  end

  def show
    @puppy = Puppy.find(params[:id])
    render "api/puppies/show"
  end

  def create
    @puppy = Puppy.new(puppy_params)

    if @puppy.save
      render "api/puppies/show"
    else
      render json: { base: @puppy.errors.full_messages }, status: 422
    end
  end

  def update
    @puppy = Puppy.find(params[:id])

    if @puppy.update(puppy_params)
      render "api/puppies/show"
    else
      render json: { base: @puppy.errors.full_messages }, status: 422
    end
  end

  def destroy
    @puppy = Puppy.find(params[:id])
    @puppy.destroy
    render :show
  end



  private
  def puppy_params
    params.require(:puppy).permit(:name, :lat, :lng, :temperament, :price, :breed, :image_url, :description, :owner_id)
  end

  def bound_params
    params[:bounds]
  end

  def price_params
    params[:price]
  end

  def breed_params
    params[:breed]
  end
end
