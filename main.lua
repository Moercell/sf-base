local main = {}


lamp = component.proxy(component.findComponent("workshopLamp"))
control = component.proxy(component.findComponent("lightControl"))

function main.cleanStorrage()
    local stor = component.proxy(component.findComponent("stor"))
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

function main.test1()
    return 'test123'
end


function main.lamp()
    lamp = component.proxy(component.findComponent("testLamp"))

    colorOne = {r = 1, g = 0, b = 0, a = 1}

    print(lamp[1]:getColorFromSlot(1).r)
    print(lamp[1].colorSlot)

    lamp[1]:setColorFromSlot(1, colorOne)
    lamp[1].colorSlot = 1
    lamp[1].intensity = 1

    t = 0    

    while true do

    if t > 10 then
    lamp[1].intensity = 0
    end

    if t > 12 then
    lamp[1].intensity = 1
    end

    t = t + 0.00003
    end
end


return main


-- while true do
    
--     cleanStorrage()
-- end