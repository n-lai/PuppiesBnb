class Api::PuppiesController < ApplicationController

  def index
    render json: Puppy.in_bounds(params[:bounds])
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
end
