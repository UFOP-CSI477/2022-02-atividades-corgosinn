require "test_helper"

class CidadesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cidade = cidades(:one)
  end

  test "should get index" do
    get cidades_url, as: :json
    assert_response :success
  end

  test "should create cidade" do
    assert_difference("Cidade.count") do
      post cidades_url, params: { cidade: { estado_id: @cidade.estado_id, nome: @cidade.nome } }, as: :json
    end

    assert_response :created
  end

  test "should show cidade" do
    get cidade_url(@cidade), as: :json
    assert_response :success
  end

  test "should update cidade" do
    patch cidade_url(@cidade), params: { cidade: { estado_id: @cidade.estado_id, nome: @cidade.nome } }, as: :json
    assert_response :success
  end

  test "should destroy cidade" do
    assert_difference("Cidade.count", -1) do
      delete cidade_url(@cidade), as: :json
    end

    assert_response :no_content
  end
end
