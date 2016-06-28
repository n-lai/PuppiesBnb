class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :name, :profile_img_url, :password)
  end
end
