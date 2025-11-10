-- Fix search_path security warning on handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, age)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'New User'),
    COALESCE((NEW.raw_user_meta_data->>'age')::INTEGER, 18)
  );
  
  -- Create initial free subscription with limits
  INSERT INTO public.subscriptions (user_id, plan_type, status, swipes_remaining, messages_remaining)
  VALUES (NEW.id, 'free', 'active', 50, 100);
  
  RETURN NEW;
END;
$$;