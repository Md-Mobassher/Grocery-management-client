import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-4 mb-5'>
            <h1 className='text-center text-success mb-5'>Our Blogs</h1>
            <div>
                <div className='my-5 border rounded p-5'>
                    <h3 className='text-danger'>Q-1: Difference between javascript and nodejs?</h3>
                    <h5 className='text-success'>Ans: 
                    <table class="table table-striped text-success">
                        <thead>
                            <tr>
                            <th scope="col-1">#</th>
                            <th className='text-center' scope="col">JavaScript</th>
                            <th className='text-center' scope="col">NodeJs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                <td>NodeJS is a Javascript runtime environment.</td>                          
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>                            
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>                            
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                <td>Nodejs does not have capability to add HTML tags.</td>                            
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                                <td>Some of the Nodejs modules are Lodash, express etc.</td>                            
                            </tr>
                            
                        </tbody>
                        </table>
                    </h5>
                </div>
                <div className='my-5 border rounded p-5'>
                    <h3 className='text-danger'>Q-2: When should you use nodejs and when should we use mongodb?</h3>
                    <h5 className='text-success'>Ans: <br />
                    <span className='text-warning'>When should we use Nodejs?</span>
                          <br />

                         Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                    <br />
                        So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                    
                    <br /><br />
                        <span className='text-warning'>When should we use MongoDB?</span>
                        <br />
                        If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing. </h5>
                </div>
                <div className='mb-5 border rounded p-5'>
                    <h3 className='text-danger'>Q-3: Differences between sql and nosql databases?</h3>
                    <h5 className='text-success'>Ans:
                    <table class="table table-striped text-success">
                        <thead>
                            <tr>
                            <th scope="col-1">#</th>
                            <th className='text-center' scope="col">SQL</th>
                            <th className='text-center' scope="col">NoSQL</th>
                            </tr>
                        </thead>
                          <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) </td>
                                <td>Non-relational or distributed database system.</td>                          
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>                            
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>                            
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>These databases are best suited for complex queries.</td>
                                <td>These databases are not so good for complex queries.</td>                            
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Vertically Scalable.</td>
                                <td>Horizontally scalable.</td>                            
                            </tr>
                            
                          </tbody>
                        </table>
                     </h5>
                </div>
                <div className='mb-5 border rounded p-5'>
                    <h3 className='text-danger'>Q-4: What is the purpose of jwt and how does it works?</h3>
                    <h5 className='text-success'>Ans: <br />
                        <span className='text-warning'>What is the purpose of jwt?</span> <br />
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br /><br />
                        <span className='text-warning'>How does it works?</span><br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        <br />
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Blog;