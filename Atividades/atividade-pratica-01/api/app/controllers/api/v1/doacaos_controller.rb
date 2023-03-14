class Api::V1::DoacaosController < ApplicationController
  before_action :set_doacao, only: %i[ show update destroy ]

  # GET /doacaos
  def index
    @doacaos = Doacao.all

    render json: @doacaos
  end

  # GET /doacaos/1
  def show
    render json: @doacao
  end

  # POST /doacaos
  def create
    @doacao = Doacao.new(doacao_params)

    if @doacao.save
      render json: @doacao, status: :created, location: @doacao
    else
      render json: @doacao.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /doacaos/1
  def update
    if @doacao.update(doacao_params)
      render json: @doacao
    else
      render json: @doacao.errors, status: :unprocessable_entity
    end
  end

  # DELETE /doacaos/1
  def destroy
    @doacao.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_doacao
      @doacao = Doacao.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def doacao_params
      params.require(:doacao).permit(:local_coleta_id, :data)
    end
end
