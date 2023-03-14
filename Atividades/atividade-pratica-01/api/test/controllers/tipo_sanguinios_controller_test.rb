require "test_helper"

class TipoSanguiniosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tipo_sanguinio = tipo_sanguinios(:one)
  end

  test "should get index" do
    get tipo_sanguinios_url, as: :json
    assert_response :success
  end

  test "should create tipo_sanguinio" do
    assert_difference("TipoSanguinio.count") do
      post tipo_sanguinios_url, params: { tipo_sanguinio: { fator: @tipo_sanguinio.fator, tipo: @tipo_sanguinio.tipo } }, as: :json
    end

    assert_response :created
  end

  test "should show tipo_sanguinio" do
    get tipo_sanguinio_url(@tipo_sanguinio), as: :json
    assert_response :success
  end

  test "should update tipo_sanguinio" do
    patch tipo_sanguinio_url(@tipo_sanguinio), params: { tipo_sanguinio: { fator: @tipo_sanguinio.fator, tipo: @tipo_sanguinio.tipo } }, as: :json
    assert_response :success
  end

  test "should destroy tipo_sanguinio" do
    assert_difference("TipoSanguinio.count", -1) do
      delete tipo_sanguinio_url(@tipo_sanguinio), as: :json
    end

    assert_response :no_content
  end
end
