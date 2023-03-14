class Api::V1::LocalColetaController < ApplicationController
  before_action :set_local_coletum, only: %i[ show update destroy ]

  # GET /local_coleta
  def index
    @local_coleta = LocalColetum.all

    render json: @local_coleta
  end

  # GET /local_coleta/1
  def show
    render json: @local_coletum
  end

  # POST /local_coleta
  def create
    @local_coletum = LocalColetum.new(local_coletum_params)

    if @local_coletum.save
      render json: @local_coletum, status: :created, location: @local_coletum
    else
      render json: @local_coletum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /local_coleta/1
  def update
    if @local_coletum.update(local_coletum_params)
      render json: @local_coletum
    else
      render json: @local_coletum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /local_coleta/1
  def destroy
    @local_coletum.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_local_coletum
      @local_coletum = LocalColetum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def local_coletum_params
      params.require(:local_coletum).permit(:nome, :rua, :numero, :complemento, :cidade_id)
    end
end
