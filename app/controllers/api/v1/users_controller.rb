class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    if @users
      render json: {
      users: @users
      }
    else
      render json: {
      status: 500,
      errors: ['no users found']
    }
    end
  end
  def show
    @user = User.find(params[:id])
    if @user
      render json: {
      user: @user
    }
    else
      render json: {
      status: 500,
      errors: ['user not found']
    }
    end
  end
  
  def create
    if user_params.present? && user_params[:password] == user_params[:password_confirmation]
      @user = User.new(user_params)
      if @user.save!
        login!
        render json: {
        status: :created,
        user: @user
        }
      else 
        render json: {
        status: 500,
        errors: @user.errors.full_messages
        }
      end
    else
      render json: {
        status: 500,
        errors: 'password do not match'
        }
    end
  end
  private
  
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
