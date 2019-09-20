package com.cognizant.smartshop.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.cognizant.smartshop.utilities.ConnectionHandler;

public class SmartShopDaoSqlImpl implements SmartShopDao
{
	public void addUser()
	{
		Connection connection = ConnectionHandler.getConnection();
		String insertQuery = "insert into user values(?,?,?,?,?,default,?,?,?,?,?)";
		PreparedStatement pstat = null;
		try {

			pstat = connection.prepareStatement(insertQuery);
			pstat.executeUpdate();
		} catch (Exception sql) {
			sql.printStackTrace();
		} finally {

			try {
				if (pstat != null) {
					pstat.close();
				}
				if (connection != null) {
					connection.close();
				}
			}

			catch (SQLException e1) {

				e1.printStackTrace();
			}

		}
	}
}
