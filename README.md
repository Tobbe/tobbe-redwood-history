Use this repository to reproduce
https://github.com/redwoodjs/redwood/issues/1892, which is the issue
https://github.com/redwoodjs/redwood/pull/2212 aims to solve.

You have to connect it to auth0 for everything to work by setting some
environment variables. These are the variables and values I'm using

```
AUTH0_DOMAIN=redwoodtest.eu.auth0.com
AUTH0_CLIENT_ID=[SECRET ID]
AUTH0_REDIRECT_URI=http://localhost:8910
AUTH0_AUDIENCE=https://redwoodtest.eu.auth0.com/api/v2/
```

When clicking the Log in button you'll see that the URL updates to point to
/beta when you return back from signing in with Auth0. But you'll still be on
the home page.

Apply my fix, and the redirect to /beta will work as expected

After getting the new RW framework code in, you'll have to make a manual
codemod to this project to add the new `<RedwoodHistory>` provider.

```diff
diff --git a/web/src/App.tsx b/web/src/App.tsx
index 43918bd..ef09bbc 100644
--- a/web/src/App.tsx
+++ b/web/src/App.tsx
@@ -1,4 +1,5 @@
 import { AuthProvider } from '@redwoodjs/auth'
+import { HistoryProvider } from '@redwoodjs/history'
 import { Auth0Client } from '@auth0/auth0-spa-js'
 import { FatalErrorBoundary } from '@redwoodjs/web'
 import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
@@ -29,11 +30,13 @@ const auth0 = new Auth0Client({

 const App = () => (
   <FatalErrorBoundary page={FatalErrorPage}>
-    <AuthProvider client={auth0} type="auth0">
-      <RedwoodApolloProvider>
-        <Routes />
-      </RedwoodApolloProvider>
-    </AuthProvider>
+    <HistoryProvider>
+      <AuthProvider client={auth0} type="auth0">
+        <RedwoodApolloProvider>
+          <Routes />
+        </RedwoodApolloProvider>
+      </AuthProvider>
+    </HistoryProvider>
   </FatalErrorBoundary>
 )
```

After this change you can try clicking Log in again to see the redirect
working as expected