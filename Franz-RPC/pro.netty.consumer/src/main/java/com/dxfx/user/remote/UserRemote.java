package com.dxfx.user.remote;

import java.util.List;

import com.dxfx.client.param.Response;
import com.dxfx.user.bean.User;

public interface  UserRemote {
	
	public Response saveUser(User user);
	public Response saveUsers(List<User> users);

}
