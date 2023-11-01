class TopicsController < ApplicationController
  def index
    @topics = Unit.find(params[:unit_id]).topics
    render partial: "topics/options", locals: { topics: @topics }
  end
end
