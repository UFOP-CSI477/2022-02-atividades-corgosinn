class Api::V1::MidiaController < ApplicationController
  before_action :set_midium, only: [:show, :update, :destroy]

  # GET /midia
  def index
    if index_params[:user_id]
      @midia = Midium.where(user_id: index_params[:user_id])
    else
      @midia = Midium.all
    end
    render json: @midia
  end

  # GET /midia/1
  def show
    render json: @midium
  end

  # POST /midia
  def create
    @midium = Midium.new(midium_params)

    if @midium.save
      render json: @midium, status: :created
    else
      render json: @midium.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /midia/1
  def update
    if @midium.update(midium_params)
      render json: @midium
    else
      render json: @midium.errors, status: :unprocessable_entity
    end
  end

  # DELETE /midia/1
  def destroy
    @midium.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def index_params
      params.permit(:user_id)
    end

    def set_midium
      @midium = Midium.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def midium_params
      params.require(:midium).permit(:user_id, :title, :creator, :rate, :comment, :image_url)
    end
end
