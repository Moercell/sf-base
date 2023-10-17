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