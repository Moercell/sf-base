lamp = component.proxy(component.findComponent("workshopLamp"))
control = component.proxy(component.findComponent("lightControl"))

stor = component.proxy(component.findComponent("stor"))


function cleanStorrage()
        
    for index, value in ipairs(stor) do

        inventory = value:getInventories()[1].itemCount

        if inventory > 200 then
            print(inventory)

            merger = stor[index].nick
            words = {}
            for word in merger:gmatch("%w+") do table.insert(words, word) end
            mer = component.proxy(component.findComponent("mer " .. words[2]))

            print(mer[1].canOutput)

        mer[1]:transferItem(1)

        end
    end

end

function test1()
    return 'test123'
end


while true do
    
    cleanStorrage()
end