require "test_helper"

class DistribuicaosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @distribuicao = distribuicaos(:one)
  end

  test "should get index" do
    get distribuicaos_url, as: :json
    assert_response :success
  end

  test "should create distribuicao" do
    assert_difference("Distribuicao.count") do
      post distribuicaos_url, params: { distribuicao: { data: @distribuicao.data, produto_id: @distribuicao.produto_id, unidade_id: @distribuicao.unidade_id } }, as: :json
    end

    assert_response :created
  end

  test "should show distribuicao" do
    get distribuicao_url(@distribuicao), as: :json
    assert_response :success
  end

  test "should update distribuicao" do
    patch distribuicao_url(@distribuicao), params: { distribuicao: { data: @distribuicao.data, produto_id: @distribuicao.produto_id, unidade_id: @distribuicao.unidade_id } }, as: :json
    assert_response :success
  end

  test "should destroy distribuicao" do
    assert_difference("Distribuicao.count", -1) do
      delete distribuicao_url(@distribuicao), as: :json
    end

    assert_response :no_content
  end
end
