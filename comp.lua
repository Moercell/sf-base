-- get internet card
local card = computer.getPCIDevices(findClass("FINInternetCard"))[1]

-- get library from internet
local req = card:request("https://raw.githubusercontent.com/rxi/json.lua/master/json.lua", "GET", "")
local _, libdata = req:await()

-- save library to filesystem
filesystem.initFileSystem("/dev")
filesystem.makeFileSystem("tmpfs", "tmp")
filesystem.mount("/dev/tmp","/")
local file = filesystem.open("json.lua", "w")
file:write(libdata)
file:close()

-- load the library from the file system and use it
local json = filesystem.doFile("json.lua")

local data = {
  somekey = "is stuff",
  otherkey = 42
}

print(json.encode(data))