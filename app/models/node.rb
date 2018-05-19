class Node < ApplicationRecord
  belongs_to :nodeable, polymorphic: true
  has_many :nodes, as: :nodeable
end
