require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with a unique email' do
    expect(build(:user)).to be_valid
  end

  it 'is invalid when email is not unique' do
    create(:user, email: 'dup@example.com')
    user = build(:user, email: 'dup@example.com')
    expect(user).not_to be_valid
  end
end
