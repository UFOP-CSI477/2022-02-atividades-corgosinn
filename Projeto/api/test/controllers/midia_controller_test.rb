require 'test_helper'

class MidiaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @midium = midia(:one)
  end

  test "should get index" do
    get midia_url, as: :json
    assert_response :success
  end

  test "should create midium" do
    assert_difference('Midium.count') do
      post midia_url, params: { midium: { comment: @midium.comment, creator: @midium.creator, image_url: @midium.image_url, rate: @midium.rate, title: @midium.title, user_id: @midium.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show midium" do
    get midium_url(@midium), as: :json
    assert_response :success
  end

  test "should update midium" do
    patch midium_url(@midium), params: { midium: { comment: @midium.comment, creator: @midium.creator, image_url: @midium.image_url, rate: @midium.rate, title: @midium.title, user_id: @midium.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy midium" do
    assert_difference('Midium.count', -1) do
      delete midium_url(@midium), as: :json
    end

    assert_response 204
  end
end
