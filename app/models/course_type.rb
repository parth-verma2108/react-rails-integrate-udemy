class CourseType < ApplicationRecord
  has_many :courses, dependent: :destroy
end
