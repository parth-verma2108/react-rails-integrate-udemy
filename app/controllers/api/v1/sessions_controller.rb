class Api::V1::SessionsController < ApplicationController
  helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!, :set_user
      
  def login!
    session[:user_id] = @user.id
  end
  def logged_in?
    !!session[:user_id]
  end
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  def authorized_user?
    @user == current_user
  end
  def logout!
    reset_session
  end
  def set_user
    @user = User.find_by(id: session[:user_id])
  end
  def create
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: {
        logged_in: true,
        user: @user
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user, please try again']
      }
    end
  end
  def is_logged_in?
    # binding.pry
    if logged_in? && current_user
      render json: {
        logged_in: true,
        logged_out: false,
        user: current_user
      }
    else
      render json: {
        logged_in: false,
        logged_out: true,
        message: 'no such user'
      }
    end
  end
  def destroy
    # binding.pry
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end
  private
  def session_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
