require "test_helper"

class LocalColetaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @local_coletum = local_coleta(:one)
  end

  test "should get index" do
    get local_coleta_url, as: :json
    assert_response :success
  end

  test "should create local_coletum" do
    assert_difference("LocalColetum.count") do
      post local_coleta_url, params: { local_coletum: { cidade_id: @local_coletum.cidade_id, complemento: @local_coletum.complemento, nome: @local_coletum.nome, numero: @local_coletum.numero, rua: @local_coletum.rua } }, as: :json
    end

    assert_response :created
  end

  test "should show local_coletum" do
    get local_coletum_url(@local_coletum), as: :json
    assert_response :success
  end

  test "should update local_coletum" do
    patch local_coletum_url(@local_coletum), params: { local_coletum: { cidade_id: @local_coletum.cidade_id, complemento: @local_coletum.complemento, nome: @local_coletum.nome, numero: @local_coletum.numero, rua: @local_coletum.rua } }, as: :json
    assert_response :success
  end

  test "should destroy local_coletum" do
    assert_difference("LocalColetum.count", -1) do
      delete local_coletum_url(@local_coletum), as: :json
    end

    assert_response :no_content
  end
end
