import React, { useContext, useEffect, useState } from "react";
import { InterviewContext } from "../services/InterviewContent";

const TeamPage = () => {
   const { filterData, setSearchTerm } = useContext(InterviewContext);
 

  return (
    <div className="team">
      <h2> Employees</h2> 
        <div className="filter-id">
            <input type="text" placeholder="search Employees" onChange={(e)=> setSearchTerm(e.target.value)} />
        </div>

        <div className="employees-list">
            {filterData.map((user)=>(
                <div className="employees-info"  key={user.login.uuid}>

                        <div className="user-image">
                            <img src={user.picture.thumbnail} alt=" users image" />
                            <div className="users-name">
                                 <p>{user.name.first} {user.name.last}</p>
                                 <p>{user.roles}</p>
                            </div>
                        </div>
                        <p className="email-id">{user.email}</p>
                        <p className="user-id"> User id:{user.id.name}</p>
                    {/* <div className="users-info">
                    </div> */}
                </div>
            ))}
        </div>
    </div>
  );
};

export default TeamPage;
