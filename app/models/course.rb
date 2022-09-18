class Course < ApplicationRecord
  belongs_to :user
  belongs_to :course_type
end
