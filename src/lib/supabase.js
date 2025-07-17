import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://idimgmujkuzuuxcmsqhc.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkaW1nbXVqa3V6dXV4Y21zcWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3ODM4NDgsImV4cCI6MjA2NzM1OTg0OH0.hXQO17aMF6-Kz6P0HcKkCBH7y406XWIhFhlXxucmLj0'

// Validate credentials before creating client
if (!SUPABASE_URL || !SUPABASE_ANON_KEY || 
    SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || 
    SUPABASE_ANON_KEY === '<ANON_KEY>') {
  console.error('Missing Supabase credentials');
}

// Create and export the Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

// Test connection
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error('Supabase connection error:', error);
  } else {
    console.log('Supabase connected successfully');
  }
}).catch(err => {
  console.error('Failed to initialize Supabase:', err);
});

export default supabase;