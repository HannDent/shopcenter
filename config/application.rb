require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

#

module Dh
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
	Rails.application.config.assets.precompile += %w( index.js )
	Rails.application.config.assets.precompile += %w( cartshop.js )
	Rails.application.config.assets.precompile += %w( productshow.js )
	Rails.application.config.assets.precompile += %w( ordershow.js )
	Rails.application.config.assets.precompile += %w( orderindex.js )
	
  end
end
