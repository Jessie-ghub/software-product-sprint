// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


@WebServlet("/server-stats")
public final class ServerStatsServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Calculate server stats
    ArrayList<String> l= new ArrayList<String>(); ////ArrayList declaration and initialization  
    l.add("Stay Hungry, Stay Foolish. - Steve Jobs"); //adding elements  
    l.add("The great myth of our times is that technology is communication. - Libby Larsen");  
    l.add("Pursuing your dreams is for losers. Doing what you love is how you become homeless. - Jimmy o. yang 's father ");  
    l.add("It is possible for ordinary people to choose to be extraordinary. – Elom Musk");  

    String json = convertToJsonUsingGson(l);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(ArrayList<String> list) {
    Gson gson = new Gson();
    String json = gson.toJson(list);
    return json;
  }
}