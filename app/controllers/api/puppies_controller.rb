class PuppiesController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @puppies = Puppy.all
  end

  def show
    @puppy = Puppy.find(params[:id])
  end

  def create
    @puppy = Puppy.new(puppy_params)
    @puppy.owner_id = current_user.id

    if @puppy.save
      render "api/puppies/show"
    else
      render json: { base: @puppy.errors.full_messages }, status: 422
    end
  end

  def update
    @puppy = Puppy.find(params[id])

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
    params.require(:puppy).permit(:name, :lat, :lng, :temperament, :price, :type, :image_url, :description)
  end
end
