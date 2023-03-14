class Api::V1::DistribuicaosController < ApplicationController
  before_action :set_distribuicao, only: %i[ show update destroy ]

  # GET /distribuicaos
  def index
    @distribuicaos = Distribuicao.all

    render json: @distribuicaos
  end

  # GET /distribuicaos/1
  def show
    render json: @distribuicao
  end

  # POST /distribuicaos
  def create
    @distribuicao = Distribuicao.new(distribuicao_params)

    if @distribuicao.save
      render json: @distribuicao, status: :created, location: @distribuicao
    else
      render json: @distribuicao.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /distribuicaos/1
  def update
    if @distribuicao.update(distribuicao_params)
      render json: @distribuicao
    else
      render json: @distribuicao.errors, status: :unprocessable_entity
    end
  end

  # DELETE /distribuicaos/1
  def destroy
    @distribuicao.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_distribuicao
      @distribuicao = Distribuicao.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def distribuicao_params
      params.require(:distribuicao).permit(:produto_id, :unidade_id, :data)
    end
end
