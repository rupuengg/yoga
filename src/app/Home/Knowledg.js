import React from 'react';

export class Knowledg extends React.Component{
  redner(){
    return(
      <div>
        <section id="knowledgecenter" className="content">
          <div className="container-fluid">
              <h2>Knowledge Center</h2>

              <div className="col-md-12">
                  <div className="row second">
                      <div className="col-md-6">
                          <div className="col-md-10 pull-right">
                              <div>
                                  <h3>White Papers</h3>
                                  <label>DataBricks: Simplifying Big Data</label>
                                  <p>One of the biggest challenges while defining a big data solution is the creation and maintenance of development environment that follows an Agile methodology. Traditionally, IT and DevOps teams are required to create physical clusters which can be challenging and time consuming.</p>
                                  <label for="post-3" className="read-more-trigger" style="margin-top:20px;">Show more</label>
                                  <div id="dv-white-paper-1" style="display:none;">
                                      <div className="entry-content blog_postcontent">
                                        <div className="modal-header">
                                          <button type="button" className="close" data-dismiss="modal">×</button>
                                          <h4 className="modal-title">DataBricks: Simplifying Big Data</h4>
                                          </div>
                                            <div className="modal-body">
                                              <p>One of the biggest challenges while defining a big data solution is the creation and maintenance of development environment that follows an Agile methodology. Traditionally, IT and DevOps teams are required to create physical clusters which can be challenging and time consuming.</p>
                                              <p><span id="more-4663"></span></p>
                                              <p>A Databricks cloud gives an elegant solution to the problem allowing to create a cluster and scale it up with hundreds of nodes</p>
                                              <p><img className="page_image_centeralign border-zero aligncenter wp-image-4668 size-full" src="http://qainfotech.com/wp-content/uploads/2016/08/info.png" alt="cluster" width="453" height="237"/></p>
                                              <p>All these clusters are created and maintained by Databricks on AWS cloud and the user only needs to pay as per the usage. The cluster can run on any release of Spark, including the latest beta versions.</p>
                                              <p>Once we the have the cluster running, the next challenge is to create either a prototype or a production version of the Spark Job. For this Databricks provides Notebook, a Spark shell with several user friendly features.</p>
                                              <p>We can run sql queries, shell scripts and create nodes directly from within the shell. Currently, Databricks’ Notebook supports Spark, Python, Sql and R. With its collaborative feature, it allows multiple users to contribute and share simultaneously.</p>
                                              <p><img className="page_image_centeralign  aligncenter wp-image-4667 size-full" src="http://qainfotech.com/wp-content/uploads/2016/08/info-2.png" alt="sql queries" width="1181" height="315"/></p>
                                              <p>Databricks environment gives connectivity to Cassandra, a local file system for storing files and all other major data sources/sinks.</p>
                                              <p>After the project has been developed using Notebooks, it can be brought to production using Databricks JOB functionality.</p>
                                              <p><img className="page_image_centeralign  aligncenter wp-image-4666 size-full" src="http://qainfotech.com/wp-content/uploads/2016/08/info-3.png" alt="schedule job" width="1188" height="338"/></p>
                                              <p>The jobs can be scheduled to run as per the user defined use cases, with options to notify users about run results via email.</p>
                                              <p>The projects that are developed outside of Databricks environment, can also be automated by scheduling the project jar. Using this method, JAVA jars can also be run apart from the code written in Python, Scala and R.</p>
                                              <p>Databricks also provides Rest-Api, which could be used to create clusters, call jobs and verify its status. Allowing the user to use other automation tools such as Jenkins to automate the process is a bonus.</p>
                                              <p><img className="page_image_centeralign  aligncenter wp-image-4665 size-full" src="http://qainfotech.com/wp-content/uploads/2016/08/info-4.png" alt="REST API Call" width="604" height="226"/></p>
                                              <p>Databricks also gives us a visualization tool called Dashboards to view the output or we can use any other visualization tool such as Tableau.</p>
                                              <p><img className="page_image_centeralign  aligncenter wp-image-4664 size-full" src="http://qainfotech.com/wp-content/uploads/2016/08/info-5.png" alt="sales" width="480" height="289"/></p>
                                              <p>But no tool is foolproof and Databricks is no exception. One such issue is making large projects inside a Notebook, without proper IDE like support. Big Notebooks can become messy and difficult to maintain.</p>
                                              <p>Databricks provides an ability to call a Notebook from another, allowing for breaking of large projects in more manageable chunks.</p>
                                              <p>In conclusion, Databricks is a great cloud based tool if you are looking for an easy, scalable big data solution. The Databricks community edition empowers users to play with the Databricks environment free of cost, which will hopefully increase adoption and more user involvement in further enhancing its feature set.</p>
                                              <p>&nbsp;</p>
                                              <p><span><em><strong>Article contribution – Prashant Verma:</strong></em></span><br/>
                                              <em>Prashant Verma is Lead, Data Engineer with Data Sciences and Analytics Team, at QA InfoTech</em></p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    <span>&nbsp;</span>
                              <div>
                                  <label>Twitter Data Mining</label>
                                  <p>What if there is a solution that is self learning and is your eyes and years on Twitter?  We have developed a big data app that starts with minimal input, keeps running in real time, gathers all relevant tweets, learns with time, distributes results in at frequent intervals to the decision makers mail box.</p>
                                  <label for="post-4" className="read-more-trigger" style="margin-top:20px;">Show more</label>
                                  <div id="dv-white-paper-2" style="display:none;">
                                      <div className="entry-content blog_postcontent">
                                        <div className="modal-header">
                                          <button type="button" className="close" data-dismiss="modal">×</button>
                                          <h4 className="modal-title">Twitter Data Mining</h4>
                                        </div>
                                        <div className="modal-body">
                                          <p>What if there is a solution that is self learning and is your eyes and years on Twitter?  We have developed a big data app that starts with minimal input, keeps running in real time, gathers all relevant tweets, learns with time, distributes results in at frequent intervals to the decision makers mail box.</p>
                                          <p><span id="more-4663"></span></p>
                                          <p>Consider Big Data and related technologies as an example.  Based on an initial set of keywords like Big Data, Spark, Neural network, Hadoop, Hive, BigQuery etc. and an initial set of #tags related to Big Data, our app will scan all tweets flowing in (from the initial hashtags), look for which hashtag is trending that has tweets containing some of our initial keywords and collect such tweets in an email.  The email is then sent to predefined set of people (which may include CEO, COO and other decision makers).</p>
                                          <label>Timely Intervention</label>
                                          <p>The decision maker gets the email and can decide to jump in on Twitter to inject his/her thoughts.  This is just in time intervention as opposed to looking at #tags later in the day and then taking some action.</p>
                                          <label>Incremental Content Relevancy</label>
                                          <p>If there are new hastags in the tweets that are sent in email, the app learns the same and starts collecting real time tweets from the new hashtags too.  So the initial list of hash tags is changed as the app keeps running.  There is a logic to keep deciding which hash tags remain on the list and which ones are dropped from time to time.  Eventually, with time the app will become in serving more and more relevant content through the email.</p>
                                          <label>Connecting with Relevant People</label>
                                          <p>A natural extension to this app is to learn about relevant influencers in the domain of our choice (i.e., Big Data in the example here).  From the tweets that are sent in the email, we can learn all twitter handles (mentioned within the tweet) and look for the ones that have many followers.  The handle of sender of the tweet (sent in the email) can also be checked for the same.  This info. can be sent as part of the email too.  The decision maker can follow such influencers to increase his/her reach.  These may be beneficial for new business / association and hence win-win for both parties.</p>
                                          <p><span style="text-decoration: underline;font-size:14px;"><em>Note : This is proprietary work produced and owned by QA InfoTech’s Data Sciences and Analytics Division.</em></span></p>
                                        </div>
                                      </div>
                                    </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="col-md-10">
                              <h3>Webinars</h3>
                              <div id="myCarousel1" className="carousel slide" data-ride="carousel" style="height:410px;">
                                  <div className="carousel-inner" role="listbox">
                                      <div className="item active">
                                          <video id="video_webinar_1" poster="http://628330208.r.worldcdn.net/l_57c922f93dcb9.png" controls="" width="507" height="284">
                                              <source src="http://628330208.r.worldcdn.net/57c92706def8d2.31054909.mp4" type="video/mp4"/>
                                              <source src="http://628330208.r.worldcdn.net/57c92706def8d2.31054909.mp4" type="video/ogg"/>
                                          </video>
                                          <label>Data Analytics Using xAPI</label>
                                          <p>We had a focused audience in the recent webinar we hosted on data analytics using xAPI. For a group that is new and upcoming at QA InfoTech, we take immense pride in this first of many more to come webinars from our data sciences and analytics practice.</p>
                                      </div>
                                      <div className="item">
                                          <video id="video_webinar_1" poster="http://628330208.r.worldcdn.net/l_5821a1e73cad5.png" controls="">
                                              <source src="http://628330208.r.worldcdn.net/5821a78e331c67.54249163.mp4" type="video/mp4"/>
                                              <source src="http://628330208.r.worldcdn.net/5821a78e331c67.54249163.mp4" type="video/ogg"/>
                                          </video>
                                          <label>Understanding &amp; Implementation of Caliper Analytics</label>
                                          <p>Learning is happening everywhere and there is a vast amount of data that is getting generated within eLearning ecosystem, across the world. Using IMS Caliper specification (https://www.imsglobal.org/activity/caliperram) one can convert this Big data into useful info and inform the future decisions/actions of learners, instructors, institutions and learning content providers. </p>
                                      </div>
                                  </div>

                                  <a className="left carousel-control" href="#myCarousel1" role="button" data-slide="prev">
                                      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                      <span className="sr-only">Previous</span>
                                  </a>
                                  <a className="right carousel-control" href="#myCarousel1" role="button" data-slide="next">
                                      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                      <span className="sr-only">Next</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="clear"></div>
          </div>
        </section>
      </div>
    );
  }
}
