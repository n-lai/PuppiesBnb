class Api::ReviewsController < ApplicationController
  def create
    review = Review.new(review_params)

    review.rating = review_params[:rating].to_i
    review.user_id = current_user.id

    if review.save
      @puppy = review.puppy
      render '/api/puppies/show'
    else
      render json: review, status: 422
    end

  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: review
  end

  private
  def review_params
    params.require(:review).permit(:rating, :description, :puppy_id)
  end
end
