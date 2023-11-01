class UnitsController < ApplicationController
  def index
    @units = Course.find(params[:course_id]).units
    render partial: "units/options", locals: { units: @units }
  end
end
