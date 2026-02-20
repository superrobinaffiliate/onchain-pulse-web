import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://urhbkauhbsjardsrxbmy.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyaGJrYXVoYnNqYXJkc3J4Ym15Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTQ3NDAwNSwiZXhwIjoyMDg3MDUwMDA1fQ.jGf8MKd0Ywp-0cwupQDvMhkxcsZ-fXwuZ6IURgWUCNQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
