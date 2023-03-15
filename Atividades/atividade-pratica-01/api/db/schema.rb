# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_15_210300) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cidades", force: :cascade do |t|
    t.string "nome"
    t.bigint "estado_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["estado_id"], name: "index_cidades_on_estado_id"
  end

  create_table "distribuicaos", force: :cascade do |t|
    t.bigint "produto_id", null: false
    t.bigint "unidade_id", null: false
    t.datetime "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["produto_id"], name: "index_distribuicaos_on_produto_id"
    t.index ["unidade_id"], name: "index_distribuicaos_on_unidade_id"
  end

  create_table "doacaos", force: :cascade do |t|
    t.datetime "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "pessoa_id", null: false
    t.bigint "local_coletum_id", null: false
    t.index ["local_coletum_id"], name: "index_doacaos_on_local_coletum_id"
    t.index ["pessoa_id"], name: "index_doacaos_on_pessoa_id"
  end

  create_table "estados", force: :cascade do |t|
    t.string "nome"
    t.string "sigla"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "local_coleta", force: :cascade do |t|
    t.string "nome"
    t.string "rua"
    t.string "numero"
    t.string "complemento"
    t.bigint "cidade_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cidade_id"], name: "index_local_coleta_on_cidade_id"
  end

  create_table "pessoas", force: :cascade do |t|
    t.string "nome"
    t.string "rua"
    t.string "numero"
    t.string "complemento"
    t.string "documento"
    t.bigint "cidade_id", null: false
    t.bigint "tipo_sanguinio_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cidade_id"], name: "index_pessoas_on_cidade_id"
    t.index ["tipo_sanguinio_id"], name: "index_pessoas_on_tipo_sanguinio_id"
  end

  create_table "produtos", force: :cascade do |t|
    t.string "etiqueta"
    t.bigint "doacao_id", null: false
    t.datetime "validade"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["doacao_id"], name: "index_produtos_on_doacao_id"
  end

  create_table "tipo_sanguinios", force: :cascade do |t|
    t.string "tipo"
    t.string "fator"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "unidades", force: :cascade do |t|
    t.string "nome"
    t.string "numero"
    t.string "complemento"
    t.bigint "cidade_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cidade_id"], name: "index_unidades_on_cidade_id"
  end

  add_foreign_key "cidades", "estados"
  add_foreign_key "distribuicaos", "produtos"
  add_foreign_key "distribuicaos", "unidades"
  add_foreign_key "doacaos", "local_coleta"
  add_foreign_key "doacaos", "pessoas"
  add_foreign_key "local_coleta", "cidades"
  add_foreign_key "pessoas", "cidades"
  add_foreign_key "pessoas", "tipo_sanguinios"
  add_foreign_key "produtos", "doacaos"
  add_foreign_key "unidades", "cidades"
end
