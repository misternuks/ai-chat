class Course < ApplicationRecord
  validates :course_name, presence: true
  has_many :units
end
