class Api::V1::CoursesController < ApplicationController
	before_action :set_course, only: [:show, :edit, :update, :destroy]

  def index
    @courses = Course.all
    render json: @courses
  end

  def show
    if @course
      render json: @course
    else
      render json: @course.errors
    end
  end

  def new
    @course = Course.new
  end

  def edit
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      render json: @course
    else
      render json: @course.errors
    end
  end

  def update
  end

  def destroy
    @course.destroy

    render json: { notice: 'Course was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def course_params
      params.permit(:name, :description, :price, :duration, :type, :issue_date)
    end
end
