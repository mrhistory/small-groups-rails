json.key_format! camelize: :lower
json.id @group.id
json.name @group.name
json.summary @group.summary
json.max_members @group.max_members
json.current_members @group.current_members
json.members @group.members do |member|
    json.id member.id
    json.user do
        json.id member.user.id
        json.first_name member.user.first_name
        json.last_name member.user.last_name
    end
end
json.leaders @group.leaders do |leader|
    json.id leader.id
    json.user do
        json.id leader.user.id
        json.first_name leader.user.first_name
        json.last_name leader.user.last_name
    end
end