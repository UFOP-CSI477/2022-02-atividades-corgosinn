require "test_helper"

class DoacaosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @doacao = doacaos(:one)
  end

  test "should get index" do
    get doacaos_url, as: :json
    assert_response :success
  end

  test "should create doacao" do
    assert_difference("Doacao.count") do
      post doacaos_url, params: { doacao: { data: @doacao.data, local_coleta_id: @doacao.local_coleta_id } }, as: :json
    end

    assert_response :created
  end

  test "should show doacao" do
    get doacao_url(@doacao), as: :json
    assert_response :success
  end

  test "should update doacao" do
    patch doacao_url(@doacao), params: { doacao: { data: @doacao.data, local_coleta_id: @doacao.local_coleta_id } }, as: :json
    assert_response :success
  end

  test "should destroy doacao" do
    assert_difference("Doacao.count", -1) do
      delete doacao_url(@doacao), as: :json
    end

    assert_response :no_content
  end
end
