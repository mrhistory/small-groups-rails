# Creates fake data for development and testing environment, if no data is present.

def create_users
  User.create!({first_name: 'admin', last_name: 'admin', email: 'admin@starfleet.gov', password: 'admin', password_confirmation: 'admin'})
  User.create!({first_name: 'Jim', last_name: 'Kirk', email: 'jkirk@starfleet.gov', password: 'kirk', password_confirmation: 'kirk'})
  User.create!({first_name: 'Jean-Luc', last_name: 'Picard', email: 'jpicard@starfleet.gov', password: 'picard', password_confirmation: 'picard'})
  User.create!({first_name: 'Will', last_name: 'Riker', email: 'wriker@starfleet.gov', password: 'riker', password_confirmation: 'riker'})
  User.create!({first_name: 'Wesley', last_name: 'Crusher', email: 'wcrusher@starfleet.gov', password: 'crusher', password_confirmation: 'crusher'})
  User.create!({first_name: 'Leonard', last_name: 'McCoy', email: 'lmccoy@starfleet.gov', password: 'mccoy', password_confirmation: 'mccoy'})
end

def create_groups
  Group.create!({name: 'Commanders Group', summary: 'Small group for commanders in Starfleet.', max_members: 5})
  Group.create!({name: 'Next Generation Group', summary: 'Small group for Star Trek: Next Generation.', max_members: 3})
  Group.create!({name: 'Original Series Group', summary: 'Small group for Star Trek: The Original Series.', max_members: 3})
end

def add_users_to_groups
  GroupMembership.create!({group: Group.find(1), user: User.find(1)})
  GroupMembership.create!({group: Group.find(1), user: User.find(2)})
  GroupMembership.create!({group: Group.find(1), user: User.find(3)})
  GroupMembership.create!({group: Group.find(1), user: User.find(4)})
  GroupMembership.create!({group: Group.find(2), user: User.find(3)})
  GroupMembership.create!({group: Group.find(2), user: User.find(4)})
  GroupMembership.create!({group: Group.find(2), user: User.find(5)})
  GroupMembership.create!({group: Group.find(3), user: User.find(2)})
  GroupMembership.create!({group: Group.find(3), user: User.find(6)})
end

def add_group_leaders_to_groups
  GroupLeadership.create!({user: User.find(2), group: Group.find(1)})
  GroupLeadership.create!({user: User.find(3), group: Group.find(2)})
  GroupLeadership.create!({user: User.find(2), group: Group.find(3)})
end

if (Rails.env.development? || Rails.env.test?) && (!User.table_exists? || User.all.empty?)
  create_users
  puts 'Users added.'
  create_groups
  puts 'Groups added.'
  add_users_to_groups
  puts 'Users added to Groups.'
  add_group_leaders_to_groups
  puts 'Group Leaders added to Groups.'
end