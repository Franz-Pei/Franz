package com.dxfx.user.remote;

import java.util.List;


import com.dxfx.user.model.User;


public interface  UserRemote {
	
	public Object saveUser(User user);
	public Object saveUsers(List<User> users);

}
