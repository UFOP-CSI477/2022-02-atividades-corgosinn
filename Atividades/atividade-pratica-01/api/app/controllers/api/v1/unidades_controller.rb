class Api::V1::UnidadesController < ApplicationController
  before_action :set_unidade, only: %i[ show update destroy ]

  # GET /unidades
  def index
    @unidades = Unidade.all

    render json: @unidades
  end

  # GET /unidades/1
  def show
    render json: @unidade
  end

  # POST /unidades
  def create
    @unidade = Unidade.new(unidade_params)

    if @unidade.save
      render json: @unidade, status: :created, location: @unidade
    else
      render json: @unidade.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /unidades/1
  def update
    if @unidade.update(unidade_params)
      render json: @unidade
    else
      render json: @unidade.errors, status: :unprocessable_entity
    end
  end

  # DELETE /unidades/1
  def destroy
    @unidade.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_unidade
      @unidade = Unidade.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def unidade_params
      params.require(:unidade).permit(:nome, :numero, :complemento, :cidade_id)
    end
end
