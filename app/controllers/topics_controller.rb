class TopicsController < ApplicationController

  def index
    @topics = Topic.all
  end

  def show
    @topic = Topic.find(params[:id])
    @chat = @topic.chat
    @message = Message.new
  end
end
