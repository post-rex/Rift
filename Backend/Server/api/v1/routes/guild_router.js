import express from 'express';
const router = express.Router();

router.post("/join", (req, res) => {
    let action = "join server"
    console.log(`${action}:`, req);
    return res.status(422).json({msg: action});
    //req params:
    //  current_user,
    //  server_params: {
    //      id
    //?
    //  }
    //? {}

    //resolve server id to server => server
    //if server: 
    //  current_user.server_memberships.create(server_id: server.id)
    //  return the newly joined server object
    //else: return server does not exist 404
});

router.get("/:id/members", (req, res) => {
    let action = "get members";
    console.log(`${action}:`, req);
    return res.status(422).json({msg: action});
    //req params:
    //  server_id,
    //  current_user
    //? {}

    //resolve server_id => server.members => users
    //return list of members 200
    //catch return cannot resolve server 404
});

router.get("/", (req, res) => { //index
    let action = "index servers";
    console.log(`${action}:`, req);
    return res.status(422).json({msg: action});
    //req params:
    //  current_user,

    //resolve ServerModel.all.forEach(server => members.includes(current_user))
    //return servers 200
});

router.post("/", (req, res) => {
    let action = "create server";
    console.log(`${action}:`, req);
    return res.status(422).json({msg: action});
    //req params:
    //  current_user
    //  server_params: {
    //?   name,
    //?   icon_url
    //?   ???
    //  }

    //create new server from server_params => server
    //if server:
    //  create new channel "general"
    //  create new audio channel "General"
    //  return new server 200
    //else: return could not create server 422
});

/*
private

  def current_server
    @server ||= Server.find_by(id: params[:id])
  end

  def server_params
    params.require(:server).permit(:name, :icon)
  end
*/