class Api::V1::TipoSanguiniosController < ApplicationController
  before_action :set_tipo_sanguinio, only: %i[ show update destroy ]

  # GET /tipo_sanguinios
  def index
    @tipo_sanguinios = TipoSanguinio.all

    render json: @tipo_sanguinios
  end

  # GET /tipo_sanguinios/1
  def show
    render json: @tipo_sanguinio
  end

  # POST /tipo_sanguinios
  def create
    @tipo_sanguinio = TipoSanguinio.new(tipo_sanguinio_params)

    if @tipo_sanguinio.save
      render json: @tipo_sanguinio, status: :created, location: @tipo_sanguinio
    else
      render json: @tipo_sanguinio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tipo_sanguinios/1
  def update
    if @tipo_sanguinio.update(tipo_sanguinio_params)
      render json: @tipo_sanguinio
    else
      render json: @tipo_sanguinio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tipo_sanguinios/1
  def destroy
    @tipo_sanguinio.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tipo_sanguinio
      @tipo_sanguinio = TipoSanguinio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tipo_sanguinio_params
      params.require(:tipo_sanguinio).permit(:tipo, :fator)
    end
end
