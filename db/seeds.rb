# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "Destroying old seeds..."
Unit.destroy_all
Course.destroy_all
puts "Creating new courses..."
course_names = ['Media English 1', 'Media English 5', 'Foundational Literacies 5', 'EIC 2 10', "Euan's cool class"]

course_names.each do |course_name|
  course = Course.find_or_create_by!(course_name: course_name)

  puts "Creating the units for the course..."
  (1..5).each do |unit_number|
    unit_name = "Unit #{unit_number}"
    unit = course.units.find_or_create_by!(unit_name: unit_name)
    puts "Creating the topics for the unit..."
    (1..3).each do |topic_number|
      topic_name = "Topic #{topic_number}"
      unit.topics.find_or_create_by!(topic_name: topic_name)
    end
  end
end
puts "Finished!"
