package com.cognizant.smartshop.utilities;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class ConnectionHandler 
{
	public static Connection getConnection()
	{
		Connection con = null;
		ResourceBundle rb = ResourceBundle.getBundle("connection");
		
		String driver = rb.getString("driver");
		String url = rb.getString("connection-url");
		String username = rb.getString("user");
		String password = rb.getString("password");
		try
		{
			
			Class.forName(driver);
			con = DriverManager.getConnection(url,username,password);
			
		}
		catch(ClassNotFoundException c)
		{
			c.printStackTrace();
		}
		catch(SQLException s)
		{
			s.printStackTrace();
		}
		
		return con;
	}
}