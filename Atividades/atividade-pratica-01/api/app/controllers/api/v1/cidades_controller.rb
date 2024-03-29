class Api::V1::CidadesController < ApplicationController
  before_action :set_cidade, only: %i[ show update destroy ]

  # GET /cidades
  def index
    @cidades = Cidade.left_outer_joins(:estado).select("cidades.*, estados.nome as nome_estado")

    render json: @cidades
  end

  # GET /cidades/1
  def show
    render json: @cidade
  end

  # POST /cidades
  def create
    @cidade = Cidade.new(cidade_params)

    if @cidade.save
      render json: @cidade, status: :created
    else
      render json: @cidade.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cidades/1
  def update
    if @cidade.update(cidade_params)
      render json: @cidade
    else
      render json: @cidade.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cidades/1
  def destroy
    @cidade.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cidade
      @cidade = Cidade.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cidade_params
      params.require(:cidade).permit(:nome, :estado_id)
    end
end
