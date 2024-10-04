import Highlight from "@/components/Highlight";
import React from "react";

export default function Introduction() {
  return (
    <>
      <section id="introduction">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p className="mt-4 text-muted-foreground">
          Welcome to the documentation for our powerful web development
          platform. In this section, ll provide an overview of the key features
          and capabilities of our product.
        </p>
      </section>
      <section id="key-concepts">
        <h2 className="text-3xl font-bold">Key Concepts</h2>
        <div className="mt-4 grid gap-8">
          <div>
            <h3 className="text-xl font-semibold">Serverless Architecture</h3>
            <p className="mt-2 text-muted-foreground">
              Our platform is built on a serverless architecture, which means
              you can focus on building your application without worrying about
              managing servers or infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Automatic Scaling</h3>
            <p className="mt-2 text-muted-foreground">
              Our platform automatically scales your application to handle
              increased traffic and demand, ensuring your users always have a
              fast and reliable experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Integrated Tooling</h3>
            <p className="mt-2 text-muted-foreground">
              Our platform provides a suite of integrated tools and services,
              including a powerful CLI, a comprehensive dashboard, and seamless
              integration with your favorite development tools.
            </p>
          </div>
        </div>
      </section>
      <section id="code-samples">
        <h2 className="text-3xl font-bold">Code Samples</h2>
        <div className="mt-4 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Deploying a Simple Web App
            </h3>
            <Highlight
              code={`import React from 'react';
              
function MyComponent() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to my component</h2>
      <p className="text-gray-600 mb-6">
        This is a sample React component with some basic styling.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
        Click me
      </button>
    </div>
  );
}

export default MyComponent;`}
            />
            <p className="mt-4 text-muted-foreground">
              This code sample demonstrates how to use the Acme CLI to create a
              new web application and deploy it to our platform.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Configuring Automatic Scaling
            </h3>
            <pre className="mt-4 rounded-lg bg-muted p-4 font-mono text-sm">
              <code>{`
# Configure auto-scaling
acme scale my-app --min-instances 2 --max-instances 10

# Monitor scaling events
acme logs my-app --events
                      `}</code>
            </pre>
            <p className="mt-4 text-muted-foreground">
              This code sample shows how to configure automatic scaling for your
              application, as well as how to monitor scaling events using the
              Acme CLI.
            </p>
          </div>
        </div>
      </section>
      <section id="advanced-topics">
        <h2 className="text-3xl font-bold">Advanced Topics</h2>
        <div className="mt-4 grid gap-8">
          <div>
            <h3 className="text-xl font-semibold">
              Integrating with Third-Party Services
            </h3>
            <p className="mt-2 text-muted-foreground">
              Our platform provides seamless integration with a wide range of
              third-party services, including databases, authentication
              providers, and more. Learn how to connect your application to
              these services and leverage their capabilities.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Implementing Custom Domains
            </h3>
            <p className="mt-2 text-muted-foreground">
              Customize the domain for your application to match your brand and
              provide a cohesive user experience. Our platform makes it easy to
              set up and manage custom domains.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Monitoring and Debugging</h3>
            <p className="mt-2 text-muted-foreground">
              Our platform provides powerful tools for monitoring the health and
              performance of your application, as well as debugging any issues
              that may arise. Learn how to leverage these tools to ensure your
              application is running smoothly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
