class ChatsController < ApplicationController
  def index
    @chats = Chat.all
  end

  def show
    @chat = Chat.find(params[:id])
  end

  def new
    @chat = Chat.new
    @courses = Course.all
    @units = []
    @topics = []
  end

  def create
    user = current_user
    course = Course.find(params[:course_id])
    unit = Unit.find(params[:unit_id])
    topic = Topic.find(params[:topic_id])

    chat = Chat.find_or_create_by(user: user, course: course, unit: unit, topic: topic)

    if @chat.save
      redirect_to @chat
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @chat = Chat.find(params[:id])
  end

  def update
    @chat = Chat.find(params[:id])
    if @chat.update(chat_params)
      redirect_to @chat
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @chat = Chat.find(params[:id])
    @chat.destroy
    redirect_to root_path, status: :see_other
  end

  private
    def chat_params
      params.require(:chat)
    end
end
