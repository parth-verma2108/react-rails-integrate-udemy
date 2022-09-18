if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_udemy-react-rails-integrate', domain: 'udemy-react-rails-integrate-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_udemy-react-rails-integrate'
end